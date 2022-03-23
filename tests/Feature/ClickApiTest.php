<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ClickApiTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_get_initial_click_count()
    {
        $this->withoutExceptionHandling();
        $response = $this->get(route('clicks.today'));

        $response->assertStatus(200);
        $response->assertJson(['data' => [
            'count' => 0
        ]]);
    }

    public function test_increment_click_count_for_today(){
        $this->withoutExceptionHandling();
        $formData = [ 'count' => 1 ];

        $response1 = $this->post(route('clicks.increment'), $formData);
        $response2 = $this->post(route('clicks.increment'), $formData);

        $response1->assertJson([
            'data' => [
                'count' => 1
            ]
        ]);
        $response2->assertJson([
            'data' => [
                'count' => 2
            ]
        ]);
    }
}
