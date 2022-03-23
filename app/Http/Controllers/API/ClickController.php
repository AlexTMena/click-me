<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Response;
use App\Click;

class ClickController extends Controller
{
    /**
     * Display resource based on current date.
     *
     * @return \Illuminate\Http\Response
     */
    public function today()
    {
        $from = now()->startOfDay()->format('Y-m-d H:i:s');
        $to = now()->endOfDay()->format('Y-m-d H:i:s');
        $result = Click::whereBetween('created_at', [$from, $to])->first();

        if( $result == null) {
            $data = Click::create([
                'count' => 0
            ]);
        }

        return Response::json([
            'data' => $result ? $result : $data
        ],200);
    }

    /**
     * Update a resource based on current date in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function increment(Request $request)
    {
        $from = now()->startOfDay()->format('Y-m-d H:i:s');
        $to = now()->endOfDay()->format('Y-m-d H:i:s');
        $result = Click::whereBetween('created_at', [$from, $to])->first();

        if($result == null) {
            $data = Click::create([
               'count' => 1
            ]);
        } else {
            $increment = $result->count + $request->count;
            $result->count = $increment;
            $result->save();
        }

        return Response::json([
            'data' => $result ? $result : $data
        ]);
    }
}
