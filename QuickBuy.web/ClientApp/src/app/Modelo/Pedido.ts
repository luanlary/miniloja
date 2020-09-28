import { ItemPedido } from "./ItemPedido";

export class Pedido{
  public id: number
  public dataPedido: Date;
  public usuarioId: number;
  public dataPrevisaoEntrega: Date;
  public cep: string;
  public estado: string;
  public cidade: string;
  public endereco: string;
  public numeroEndereco: string;
  public formaPagamentoId: number;
  public itensPedido: ItemPedido[];
  constructor() {
    this.itensPedido = [];
    this.dataPedido = new Date();
    this.dataPrevisaoEntrega = new Date();
  }
}
