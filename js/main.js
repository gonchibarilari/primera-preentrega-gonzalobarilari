//console.log("hola java script");

//prompt("hola");

//const suma = (a,b) => a + b;
//const resta = (a,b) => a - b;
//const iva = x => x * 0.21;

/* 
const evaluador = () => {
    let impuesto;
    let valid = false;


    const ImpuestoDelArticulo = (ImpuestoArticulo) => {
        let ValorDelArticulo = parseFloat(prompt("Ingresa el precio del Articulo"));
        let ImpuestoIVA = PrecioArticulo * 0.21;
        while (precioArticulo <= 0 && isNaN(precioArticulo)); {
            precioArticulo = prompt("Ingresa el precio del Articulo")
        }

        let PreciofinalArticulo = precioArticulo + parseFloat(ImpuestoIVA);
     */



/*         const evaluador = () => {
            // Función para calcular el impuesto y el precio final
            const ImpuestoDelArticulo = () => {
                let precioArticulo = parseFloat(prompt("Ingresa el precio del Artículo"));
                // Verificar que el precio sea un número válido y mayor que 0
                while (isNaN(precioArticulo) || precioArticulo <= 0) {
                    precioArticulo = parseFloat(prompt("Precio inválido. Ingresa un precio válido para el Artículo"));
                }
                
                // Calcular el impuesto IVA (21%)
                const impuestoIVA = precioArticulo * 0.21;
                // Calcular el precio final
                const precioFinalArticulo = precioArticulo + impuestoIVA;
        
                // Mostrar el resultado
                alert(`Precio del artículo: ${precioArticulo.toFixed(2)}\nImpuesto IVA: ${impuestoIVA.toFixed(2)}\nPrecio final: ${precioFinalArticulo.toFixed(2)}`);
            };
        
            // Llamar a la función para iniciar el proceso
            ImpuestoDelArticulo();
        };
        
        // Llamar a la función principal para ejecutar el código
        evaluador(); */



/*         const evaluador = () => {
            // Función para calcular el impuesto, el descuento y el precio final
            const ImpuestoDelArticulo = () => {
                let precioArticulo = parseFloat(prompt("Ingresa el precio del Artículo"));
        
                // Verificar que el precio sea un número válido y mayor que 0
                if (isNaN(precioArticulo) || precioArticulo <= 0) {
                    alert("Precio inválido. Por favor, ingresa un precio válido.");
                    return;
                }
        
                // Calcular el impuesto IVA (21%)
                const impuestoIVA = precioArticulo * 0.21;
        
                // Condicional para aplicar descuento
                let descuento = 0;
                if (precioArticulo > 100) {
                    descuento = precioArticulo * 0.10; // Descuento del 10%
                    alert("¡Felicidades! Has calificado para un descuento del 10%.");
                } else {
                    alert("No califica para un descuento.");
                }
        
                // Calcular el precio final después del impuesto y el descuento
                const precioConDescuento = precioArticulo - descuento;
                const precioFinalArticulo = precioConDescuento + impuestoIVA;
        
                // Mostrar el resultado usando concatenación de cadenas
                alert(
                    "Precio del artículo: " + precioArticulo.toFixed(2) + "\n" +
                    "Descuento: " + descuento.toFixed(2) + "\n" +
                    "Impuesto IVA: " + impuestoIVA.toFixed(2) + "\n" +
                    "Precio final: " + precioFinalArticulo.toFixed(2)
                );
            };
        
            // Llamar a la función para iniciar el proceso
            ImpuestoDelArticulo();
        };
        
        // Llamar a la función principal para ejecutar el código
        evaluador();
         */



        const evaluador = () => {
            const ImpuestoDelArticulo = () => {
                let precioArticulo = parseFloat(prompt("Ingresa el precio del Artículo"));
        
                // Verificar que el precio sea un número válido y mayor que 0
                if (isNaN(precioArticulo) || precioArticulo <= 0) {
                    alert("Precio inválido. Por favor, ingresa un precio válido.");
                    return;
                }
                console.log(precioArticulo);
                
                let porcentajeDescuento = parseFloat(prompt("Ingresa el porcentaje de descuento (por ejemplo, 10 para 10%)"));
        
                // Verificar que el porcentaje de descuento sea válido
                if (isNaN(porcentajeDescuento) || porcentajeDescuento < 0 || porcentajeDescuento > 100) {
                    alert("Porcentaje de descuento inválido. Por favor, ingresa un porcentaje válido entre 0 y 100.");
                    return;
                }
        
                // Calcular el impuesto IVA (21%)
                const impuestoIVA = precioArticulo * 0.21;
        
                // Calcular el descuento basado en el porcentaje ingresado
                const descuento = (precioArticulo * porcentajeDescuento) / 100;
        
                // Calcular el precio final después del descuento y el impuesto
                const precioConDescuento = precioArticulo - descuento;
                const precioFinalArticulo = precioConDescuento + impuestoIVA;
        
                // Mostrar el resultado usando concatenación de cadenas
                alert(
                    "Precio del artículo: " + precioArticulo.toFixed(2) + "\n" +
                    "Descuento: " + descuento.toFixed(2) + " (" + porcentajeDescuento.toFixed(2) + "%)\n" +
                    "Impuesto IVA: " + impuestoIVA.toFixed(2) + "\n" +
                    "Precio final: " + precioFinalArticulo.toFixed(2)
                );
            };
        
            // Llamar a la función para iniciar el proceso
            ImpuestoDelArticulo();
        };
        
        // Llamar a la función principal para ejecutar el código
        evaluador();