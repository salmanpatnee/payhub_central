<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pull_window_amounts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pull_window_id')->constrained()->cascadeOnDelete();
            $table->string('kind', 32);
            $table->string('currency', 16);
            $table->unsignedBigInteger('cents');

            $table->unique(['pull_window_id', 'kind', 'currency']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pull_window_amounts');
    }
};
