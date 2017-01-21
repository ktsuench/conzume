<?php
defined('BASEPATH') OR exit('No direct script access allowed');

Class Items_Model extends CI_Model{
    const TABLE_NAME = 'Items';
    
    public function __construct(){
        parent::__construct();
        $this->load->database();
    }
    
    public function get_item($id = FALSE){
        $this->db->order_by('ItemId ASC, ItemName ASC');
        
        if($id == FALSE){
            $query = $this->db->get(self::TABLE_NAME);
            return $query->result_array();
        }
        
        $query = $this->db->get_where(self::TABLE_NAME, array('ItemId' => $id));
        return $query->row_array();
    }
    
    public function set_item($id = FALSE){
        $data = array(
            'ItemId'         =>  $this->input->post('item_id'),
            'ItemName'          =>  $this->input->post('item_name'),
            'ItemPrice'    =>  $this->input->post('item_price'),
        );
        
        if($id == FALSE){
            return $this->db->insert(self::TABLE_NAME, $data);
        }else{
            return $this->db->update(self::TABLE_NAME, $data, array('id' => $id));
        }
    }
    
    /*public function set_item_batch($rows = FALSE){
        if($rows !== FALSE){
            $i = 0;
            foreach($rows as $record){
                //Check that item is not registered already
                if(empty(self::get_item($record['item']))){
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
    
    public function remove_item($item = FALSE){
        if($item != FALSE){
            return $this->db->delete(self::TABLE_NAME, array('item' => $item));
        }
        return 0;
    }
}
?>