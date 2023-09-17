@Entity
@Data
public class Barbeiro {
    @Id
    @GeneratedType(strategy = GeneratedType.IDENTITY)
    private Long id; 
    @Column(nullable=false)
    private String nome;
}
