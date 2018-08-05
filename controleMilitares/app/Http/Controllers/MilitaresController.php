<?php

namespace App\Http\Controllers;

use App\Http\Requests\MilitaresRequest as Request;
use App\Militares;

class MilitaresController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Militares::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Militares::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Militares  $militares
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $militares = Militares::findOrFail($id);

        return $militares;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Militares  $militares
     * @return \Illuminate\Http\Response
     */
    public function edit(Militares $militares)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Militares  $militares
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $militares = Militares::findOrFail($request->id);

        $militares->update($request->all());
        return $militares;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Militares  $militares
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $militares = Militares::findOrFail($id);

        $militares->delete();
        return $militares;
    }
}
