<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Demo extends CI_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();
    }
    
    public function index()
    {
        $this->load->helper('url');
        $this->load->view('demo');
    }
}

?>