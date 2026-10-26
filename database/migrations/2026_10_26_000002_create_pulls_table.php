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
        Schema::create('pulls', function (Blueprint $table) {
            $table->id();
            $table->foreignId('deployment_id')->constrained()->restrictOnDelete();
            $table->dateTime('pulled_at');
            $table->string('status', 32);
            $table->string('source', 32);
            $table->foreignId('triggered_by')->nullable()->constrained('users')->nullOnDelete();
            $table->string('failure_kind', 32)->nullable();
            $table->unsignedSmallInteger('http_status')->nullable();
            $table->string('failure_message')->nullable();
            $table->text('failure_body')->nullable();
            $table->string('contract_version', 8)->nullable();
            $table->dateTime('generated_at')->nullable();
            $table->string('timezone', 64)->nullable();
            $table->string('app_release', 64)->nullable();
            $table->mediumText('raw_reply')->nullable();
            $table->dateTime('created_at')->nullable();

            $table->index(['deployment_id', 'status', 'pulled_at']);
            $table->index(['deployment_id', 'pulled_at']);
            $table->index('pulled_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pulls');
    }
};
