// Función para desbloquear ramos cuando apruebas uno
function desbloquear(ids) {
  ids.forEach(id => {
    const ramo = document.getElementById(id);
    if (ramo) {
      ramo.classList.remove('bloqueado');
      const checkbox = ramo.querySelector('input[type="checkbox"]');
      if (checkbox) checkbox.disabled = false;
    }
  });
}

// Manejar el tachado y desbloqueo al marcar checkbox
document.querySelectorAll('.ramo input[type="checkbox"]').forEach(chk => {
  chk.addEventListener('change', e => {
    const ramoDiv = e.target.closest('.ramo');
    if (e.target.checked) {
      ramoDiv.classList.add('tachado');
      // Desbloquear los ramos que dependen de este
      // La función 'onchange' en HTML ya llama a desbloquear, por eso aquí no hace falta repetir
    } else {
      ramoDiv.classList.remove('tachado');
      // Si quieres bloquear los ramos hijos al desmarcar, puedes implementar lógica extra aquí
      // Por ahora, no bloqueamos para evitar líos
    }
  });
});
