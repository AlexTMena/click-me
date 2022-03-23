<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Response;

class ClickController extends Controller
{
    /**
     * Display resource based on current date.
     *
     * @return \Illuminate\Http\Response
     */
    public function today()
    {
        return Response::json([
            'data' => [
                'count' => 0
            ]
        ],200);
    }

    /**
     * Update a resource based on current date in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }
}
