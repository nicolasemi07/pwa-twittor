// Guarda en el cache dinamico
function actualizaCacheDinamico(dynamicCache, request, response) {
  if (response.ok) {
    // La respuesta tiene datos que tengo que guardar en el cache
    return caches.open(dynamicCache).then((cache) => {
      cache.put(request, response.clone());
      return response.clone();
    });
  } else {
    // Falló el cache e Internet --> No hay mucho para hacer
    return response;
  }
}
