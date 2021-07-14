using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WebApiRickLocalization.Models;

namespace WebApiRickLocalization.Repository
{
    public class ViagemMapping : IEntityTypeConfiguration<Viagem>
    {
        public void Configure(EntityTypeBuilder<Viagem> builder)
        {
            builder.ToTable("Viagens");

            builder.HasKey(viagem => viagem.Id)
                .IsClustered(true);

            builder.Property(viagem => viagem.nome)
                 .HasColumnName("nome");

            builder.Property(viagem => viagem.endereco)
                .HasColumnName("endereco");

            builder.Property(viagem => viagem.dataViagem)
               .HasColumnName("dataViagem");

            builder.Property(viagem => viagem.dimensao)
               .HasColumnName("dimensao");

            builder.Property(viagem => viagem.observacao)
               .HasColumnName("observacao");

        }

    }
}
