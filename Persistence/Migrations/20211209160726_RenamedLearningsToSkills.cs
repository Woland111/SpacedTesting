using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistance.Migrations
{
    public partial class RenamedLearningsToSkills : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Learnings");

            migrationBuilder.CreateTable(
                name: "Skills",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Question = table.Column<string>(type: "TEXT", nullable: true),
                    Answer = table.Column<string>(type: "TEXT", nullable: true),
                    NextTestOn = table.Column<DateTime>(type: "TEXT", nullable: false),
                    CompletedTests = table.Column<string>(type: "TEXT", nullable: true),
                    Result = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Skills", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Skills");

            migrationBuilder.CreateTable(
                name: "Learnings",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Answer = table.Column<string>(type: "TEXT", nullable: true),
                    CompletedTests = table.Column<string>(type: "TEXT", nullable: true),
                    NextTestOn = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Question = table.Column<string>(type: "TEXT", nullable: true),
                    Result = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Learnings", x => x.Id);
                });
        }
    }
}
