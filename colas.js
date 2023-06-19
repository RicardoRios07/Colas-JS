class Cliente {
  constructor(nombre) {
    this.nombre = nombre;
  }

  getNombre() {
    return this.nombre;
  }
}

class ColaClientes {
  constructor() {
    this.cola = [];
  }

  agregarCliente(cliente) {
    this.cola.push(cliente);
    console.log(`Cliente ${cliente.getNombre()} ha llegado al banco.`);
  }

  atenderCliente() {
    const cliente = this.cola.shift();
    if (cliente !== undefined) {
      console.log(`Atendiendo al cliente ${cliente.getNombre()}`);
    } else {
      console.log("No hay clientes en la cola.");
    }
    return cliente;
  }

  estaVacia() {
    return this.cola.length === 0;
  }
}

class SimuladorBanco {
  constructor() {
    this.colaClientes = new ColaClientes();
    this.clientesAtendidos = 0;
    this.tiempoTotalEspera = 0;
  }

  ejecutarSimulacion(tiempoSimulacion) {
    console.log(`Simulación de atención al cliente en el banco durante ${tiempoSimulacion} minutos:`);
    for (let i = 1; i <= tiempoSimulacion; i++) {
      console.log(`\nMinuto ${i}`);

      if (Math.random() <= 0.3) {
        const nuevoCliente = `Cliente${i}`;
        this.colaClientes.agregarCliente(new Cliente(nuevoCliente));
      }
      const clienteAtendido = this.colaClientes.atenderCliente();
      if (clienteAtendido !== null && clienteAtendido !== undefined) {
        const tiempoEspera = Math.floor(Math.random() * 6) + 1;
        console.log(`Cliente ${clienteAtendido.getNombre()} atendido en ${tiempoEspera} minutos.`);
      }
    }
    console.log("\nEstadísticas de la simulación:");
    console.log(`Clientes atendidos: ${this.clientesAtendidos}`);
    const tiempoPromedioEspera = this.tiempoTotalEspera / this.clientesAtendidos;
    console.log(`Tiempo promedio de espera: ${tiempoPromedioEspera} minutos.`);
  }
}

const simulador = new SimuladorBanco();
simulador.ejecutarSimulacion(60);
