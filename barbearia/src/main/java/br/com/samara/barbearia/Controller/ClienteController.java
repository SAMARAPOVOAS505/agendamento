public import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clientes") // Define o caminho base para este controlador
public class ClienteController {

    private final ClienteRepository clienteRepository;

    @Autowired
    public ClienteController(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    // Endpoint para criar um novo cliente
    @PostMapping
    public Cliente criarCliente(@RequestBody Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    // Endpoint para obter todos os clientes
    @GetMapping
    public List<Cliente> obterTodosClientes() {
        return clienteRepository.findAll();
    }

    // Endpoint para obter um cliente por ID
    @GetMapping("/{id}")
    public Cliente obterClientePorId(@PathVariable Long id) {
        return clienteRepository.findById(id)
                .orElseThrow(() -> new ClienteNaoEncontradoException(id));
    }

    // Outros endpoints, como atualizar e excluir, podem ser adicionados conforme necessário
}
 ClienteController {
    
}
