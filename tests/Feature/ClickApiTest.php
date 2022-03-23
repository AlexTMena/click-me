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
        $response = $this->get('/api/clicks');

        $response->assertStatus(200);
        $response->assertJson(['data' => [
            'count' => 0
        ]]);
    }
}
