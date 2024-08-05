
        const evaluador = () => {
            const ImpuestoDelArticulo = () => {
                let precioArticulo = parseFloat(prompt("Ingresa el precio del Artículo"));
        
                // vericando que el numero sea mayor a 0
                if (isNaN(precioArticulo) || precioArticulo <= 0) {
                    alert("Precio inválido. Por favor, ingresa un precio válido.");
                    return;
                }
                console.log(precioArticulo);
                
                let porcentajeDescuento = parseFloat(prompt("Ingresa el porcentaje de descuento (por ejemplo, 10 para 10%)"));
        
                // Que el porcentaje de descuento sea valido
                if (isNaN(porcentajeDescuento) || porcentajeDescuento < 0 || porcentajeDescuento > 100) {
                    alert("Porcentaje de descuento inválido. Por favor, ingresa un porcentaje válido entre 0 y 100.");
                    return;
                }
                // Calcular el impuesto IVA
                const impuestoIVA = precioArticulo * 0.21;
        
                // Calcular el descuento basado en el porcentaje ingresado
                const descuento = (precioArticulo * porcentajeDescuento) / 100;
        
                // Calcular el precio final después del descuento y el impuesto
                const precioConDescuento = precioArticulo - descuento;
                const precioFinalArticulo = precioConDescuento + impuestoIVA;
        
                
                alert(
                    "Precio del artículo: " + precioArticulo.toFixed(2) + "\n" +
                    "Descuento: " + descuento.toFixed(2) + " (" + porcentajeDescuento.toFixed(2) + "%)\n" +
                    "Impuesto IVA: " + impuestoIVA.toFixed(2) + "\n" +
                    "Precio final: " + precioFinalArticulo.toFixed(2)
                );
            };
        
            // llamando a la funcion
            ImpuestoDelArticulo();
        };
        
        // ejecutar el codigo
        evaluador();