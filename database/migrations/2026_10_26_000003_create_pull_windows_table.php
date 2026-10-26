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
        Schema::create('pull_windows', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pull_id')->constrained()->cascadeOnDelete();
            $table->string('name', 32);
            $table->string('starts_at', 40)->nullable();
            $table->string('ends_at', 40)->nullable();
            $table->unsignedInteger('links_total');
            $table->unsignedInteger('links_pending');
            $table->unsignedInteger('links_completed');
            $table->unsignedInteger('links_failed');
            $table->unsignedInteger('links_cancelled');
            $table->unsignedInteger('links_expired');
            $table->unsignedInteger('paid_count');

            $table->unique(['pull_id', 'name']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pull_windows');
    }
};
