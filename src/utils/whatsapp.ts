import { CartItem } from '../types';

interface OrderDetails {
  items: CartItem[];
  total: number;
  name: string;
  address: string;
  deliveryMethod: 'delivery' | 'pickup';
}

const STORE_PHONE = "5561992283532"; // Substituir pelo número real da distribuidora (formato: 55DDDNUMERO)

export function generateWhatsAppLink(details: OrderDetails): string {
  const { items, total, name, address, deliveryMethod } = details;

  let message = `Olá, Cordeiro Distribuidora! Meu nome é *${name}* e gostaria de fazer o seguinte pedido:\n\n`;
  
  message += `*ITENS DO PEDIDO:*\n`;
  items.forEach(item => {
    message += `- ${item.quantity}x ${item.name} (R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')})\n`;
  });

  message += `\n*TOTAL: R$ ${total.toFixed(2).replace('.', ',')}*\n\n`;

  if (deliveryMethod === 'delivery') {
    message += `*ENTREGA:*\nEndereço: ${address}\n`;
  } else {
    message += `*RETIRADA:*\nVou retirar no local.\n`;
  }

  message += `\nAguardo a confirmação e as opções de pagamento. Obrigado!`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${STORE_PHONE}?text=${encodedMessage}`;
}
