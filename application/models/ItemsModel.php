<?php
defined('BASEPATH') OR exit('No direct script access allowed');

Class ItemsModel extends CI_Model{
    const TABLE_NAME = 'items';
    
    public function __construct(){
        parent::__construct();
        $this->load->database();
    }
    
    public function get_item($id = FALSE){
        $this->db->order_by('itemId ASC, itemName ASC');
        
        if($id == FALSE){
            $query = $this->db->get(self::TABLE_NAME);
            return $query->result_array();
        }
        
        str_pad($id, 25, " ");
        
        $query = $this->db->get_where(self::TABLE_NAME, array('itemId' => $id));
        return $query->row_array();
    }
    
    public function set_item($item = FALSE, $id = FALSE){
        $data = array(
            'itemId'            =>  $item['id'],
            'itemName'          =>  $item['name'],
            'itemPrice'         =>  floatval($item['price']),
            'itemQuantity'      =>  intval($item['quantity']),
        );
        
        if ($id == FALSE) {
            $item['message'] = $this->db->insert(self::TABLE_NAME, $data);
            return $item;
        } else {
            $item['message'] = $this->db->update(self::TABLE_NAME, $data, array('id' => $id));
            return $item;
        }
    }
    
    /*public function set_item_batch($rows = FALSE){
        if($rows !== FALSE){
            $i = 0;
            foreach($rows as $record){
                //Check that id is not registered already
                if(empty(self::get_user($record['id']))){
                    foreach($record as $key => $val){
                        $data[$i][$key] = $val;
                    }
                    $i++;
                }
            }
            
            return $this->db->insert_batch(self::TABLE_NAME, $data);
        }else{
            return 0;
        }
    }*/
    
    public function remove_item($id = FALSE){
        if($id != FALSE){
            return $this->db->delete(self::TABLE_NAME, array('id' => $id));
        }
        return 0;
    }
}

?>