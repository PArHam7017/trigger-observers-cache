<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInsertProductTrigger extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::unprepared('
            CREATE TRIGGER `insert_products_trigger` BEFORE INSERT ON `products`
            FOR EACH ROW 
            INSERT INTO `logs` (`action`) values (CONCAT("PRODUCT " , NEW.name , " INSERTED"))
        ');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::unprepared('DROP TRIGGER IF EXISTS `insert_products_trigger`;');
    }
}
