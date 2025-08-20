function abrirWhatsapp() {
  const numero = "5518996737849"; 
  const mensagem = "Olá, tenho interesse em criar uma landing page!";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}
