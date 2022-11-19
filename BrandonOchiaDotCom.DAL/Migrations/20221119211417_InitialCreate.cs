using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BrandonOchiaDotCom.DAL.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BodyScaleDataPoints",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    WeightPounds = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    WeightKilograms = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    BodyFatPercentage = table.Column<decimal>(type: "decimal(18,2)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BodyScaleDataPoints", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BodyScaleDataPoints");
        }
    }
}
