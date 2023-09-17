package br.com.samara.barbearia.model;


@Entity
@Data
public class Agendamento {
    @Column(nullable = false)
    private LocalDataTime data;
    @Column(nullable = false)
    private LocalDataTime hora; 
}
