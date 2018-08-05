<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Militares extends Model
{
    protected $fillable = ['nome', 'data_nascimento', 'servico_militar_obrigatorio', 'patentes', 'identidade'];
}
