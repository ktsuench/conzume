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
        
        $query = $this->db->get_where(self::TABLE_NAME, array('id' => $id));
        return $query->row_array();
    }
    
    public function set_item($id = FALSE){
        $data = array(
            'itemId'            =>  $this->input->post('id'),
            'itemName'          =>  $this->input->post('type'),
            'itemPrice'         =>  $this->input->post('first_name'),
            'itemQuantity'      =>  $this->input->post('last_name'),
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