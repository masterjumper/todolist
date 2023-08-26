<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
class TasksFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return[
            'description' => $this->faker->sentence,
            'isCompleted' => $this->faker->boolean,
            'isEditing' => $this->faker->boolean,
            
        ];
    }

}