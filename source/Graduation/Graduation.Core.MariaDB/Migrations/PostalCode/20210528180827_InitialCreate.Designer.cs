﻿// <auto-generated />
using Graduation.Core;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Graduation.Core.MariaDB.Migrations.PostalCode
{
    [DbContext(typeof(PostalCodeContext))]
    [Migration("20210528180827_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 64)
                .HasAnnotation("ProductVersion", "5.0.6");

            modelBuilder.Entity("Graduation.Core.PostalCode", b =>
                {
                    b.Property<string>("Code")
                        .HasColumnType("varchar(255)");

                    b.Property<string>("Area")
                        .HasColumnType("longtext");

                    b.Property<string>("Prefecture")
                        .HasColumnType("longtext");

                    b.HasKey("Code");

                    b.ToTable("geo_PostalCodes");
                });
#pragma warning restore 612, 618
        }
    }
}