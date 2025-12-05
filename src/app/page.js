export default function Home() {
  return (
    <>
    <nav className="bg-linear-to-r from-red-900 to-red-800 text-white flex justify-around top-0 fixed w-full">
      <img className="h-6 m-2 rounded-full shadow-lg" src="https://yt3.ggpht.com/5Ae-hXfgs9WXBwuvDPgrdVLVxXNU65S9UD_O7kTK5sjLkAhSTeYdtHNGcs2AZTAnpXrfg1Tp2g=s108-c-k-c0x00ffffff-no-rj"></img>
      <span className="lg:hidden pt-1">☰</span>
      <span className="hidden lg:block pt-1">Página principal</span>
      <span className="hidden lg:block pt-1">Sobre la empresa</span>
      <span className="hidden lg:block pt-1">Salir</span>
    </nav>

    <header className="p-20 bg-linear-to-r from-black to-red-950 text-white w-full">
      <h1 className="block font-bold lg:text-8xl md:text-7xl text-4xl text-center">Untar la Manteca S. A.</h1>
    </header>

    <div className="bg-linear-to-r from-black to-red-950 text-white w-full grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 sm:grid-flow-row-dense place-items-center justify-around">
      <div className="max-w-200 order-2 lg:order-1">
        <h1 className="block text-center lg:text-4xl md:text-3xl sm:text-2xl font-bold pl-10 pr-10 pb-5">Producto Destacado: Kit de Programación de Untar la Manteca</h1>
        <span className="block text-center text-l">Compra el Kit de Programación y tu código automáticamente será órdenes de magnitud mejor sin hacer NINGÚN esfuerzo. El de la imagen serás tú después de comprar el Kit.</span>
        <div className="grid grid-cols-2 gap-4 pt-10 place-items-center">
          <button className="rounded-md hover:scale-105 bg-linear-to-r from-red-800 to-red-900 p-2">Comprar ahora</button>
          <button className="rounded-md hover:scale-105 bg-linear-to-r from-red-800 to-red-900 p-2">Ver catálogo</button>
        </div>
      </div>
      <div className="order-1 lg:order-2 m-10">
        <img className="max-w-100 sm:pb-5 rounded-md" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F91%2F09%2F79%2F910979a5f0722da3fccb2e1032dc3100.jpg&f=1&nofb=1&ipt=a045780ff7df24f4750120e8decd8b78e5c7a64b81e11cab85ddff27b22a0d89"></img>
      </div>
    </div>


    <div className="grid bg-linear-to-r from-black to-red-950 text-white w-full gap-2">
      <h1 className="pt-10 block font-bold text-3xl text-center pb-5">Características</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:gap-4 p-2 place-items-center justify-around">
        <div className="grid place-items-center hover:scale-105 object-cover bg-red-950 border-red-700 border-4 rounded-md p-5 m-2">
          <span className="block font-bold text-center pb-2">🤖 Sistema 🤖</span>
          <span className="block text-center">El sistema utilizado por el Kit es confidencial, pero lo que sí se puede revelar es que no tiene ningún minero de Bitcoin</span>
        </div>
        <div className="grid place-items-center hover:scale-105 object-cover bg-red-950 border-red-700 border-4 rounded-md p-5 m-2">
          <span className="block font-bold text-center">💵 Dinero 💵</span>
          <span className="block text-center">El producto tiene como público objetivo gente con un poder adquisitivo alto, ya que esta es una solución definitiva</span>
        </div>
        <div className="grid place-items-center hover:scale-105 object-cover bg-red-950 border-red-700 border-4 rounded-md p-5 m-2">
          <span className="block font-bold text-center">💻 Uso 💻</span>
          <span className="block text-center">El Kit se inyecta en tu ordenador y se activa cada vez que abres un IDE o cualquier tipo de entorno</span>
        </div>
        <div className="grid place-items-center hover:scale-105 object-cover bg-red-950 border-red-700 border-4 rounded-md p-5 m-2">
          <span className="block font-bold text-center">🪙 Política de devoluciones 🪙</span>
          <span className="block text-center">No hay devoluciones. En caso de querer devolver el producto, Untar la Manteca S. A. enviará un sicario a tu casa</span>
        </div>
      </div>
    </div>

    <div className="grid bg-linear-to-r from-black to-red-950 text-white w-full gap-2">
      <h1 className="pt-10 block font-bold text-3xl text-center pb-5">Galería de productos</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:gap-4 p-2 m-2 place-items-center justify-around">
        <div className="grid lg:col-span-2 place-items-center hover:scale-105 aspect-square object-cover bg-red-950 border-red-700 border-4 rounded-md p-2">
          <span className="block font-bold text-center">Producto 1: Kit de Programación</span>
          <span className="block text-center">El producto estrella de esta empresa</span>
          <img className="max-h-30" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fquestion_mark%2Fquestion_mark_PNG56.png&f=1&nofb=1&ipt=0de61cad27d795cddd73e5bc0f1c90c4c35a8848c2d504d026cdb94537e89303"></img>
          <span className="block text-center">Precio: 99999999999999999999999999999999999 €</span>
          <button className="max-w-50 rounded-md hover:scale-105 bg-linear-to-r from-red-800 to-red-900 p-2 m-2">Añadir al carrito</button>
        </div>
        <div className="grid place-items-center hover:scale-105 aspect-square object-cover bg-red-950 border-red-700 border-4 rounded-md p-2">
          <span className="block font-bold text-center">Producto 2: Kit de Programación Lite</span>
          <span className="block text-center">La versión con menos funcionalidades del Kit. Comprarlo no te hará ser como el de la foto</span>
          <img className="max-h-30" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fquestion_mark%2Fquestion_mark_PNG56.png&f=1&nofb=1&ipt=0de61cad27d795cddd73e5bc0f1c90c4c35a8848c2d504d026cdb94537e89303"></img>
          <span className="block text-center">Precio: 20 €</span>
          <button className="max-w-50 rounded-md hover:scale-105 bg-linear-to-r from-red-800 to-red-900 p-2 m-2">Añadir al carrito</button>
        </div>
        <div className="grid place-items-center hover:scale-105 aspect-square object-cover bg-red-950 border-red-700 border-4 rounded-md p-2">
          <span className="block font-bold text-center">Producto 3: Utilidades de Programación</span>
          <span className="block text-center">Un conjunto de utilidades para ayudarte a programar. Para más información, compra el producto</span>
          <img className="max-h-30" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fquestion_mark%2Fquestion_mark_PNG56.png&f=1&nofb=1&ipt=0de61cad27d795cddd73e5bc0f1c90c4c35a8848c2d504d026cdb94537e89303"></img>
          <span className="block text-center">Precio: 20 €</span>
          <button className="max-w-50 rounded-md hover:scale-105 bg-linear-to-r from-red-800 to-red-900 p-2 m-2">Añadir al carrito</button>
        </div>
        <div className="grid place-items-center hover:scale-105 aspect-square object-cover bg-red-950 border-red-700 border-4 rounded-md p-2">
          <span className="block font-bold text-center">Producto 4: Chip Cerebral de Programación</span>
          <span className="block text-center">Un chip que instala en tu cerebro todo el conocimiento de programación que existe. Las actualizaciones se venden por separado</span>
          <img className="max-h-30" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fquestion_mark%2Fquestion_mark_PNG56.png&f=1&nofb=1&ipt=0de61cad27d795cddd73e5bc0f1c90c4c35a8848c2d504d026cdb94537e89303"></img>
          <span className="block text-center">Precio: ∞ €</span>
          <button className="max-w-50 rounded-md hover:scale-105 bg-linear-to-r from-red-800 to-red-900 p-2 m-2">Añadir al carrito</button>
        </div>
        <div className="grid place-items-center hover:scale-105 aspect-square object-cover bg-red-950 border-red-700 border-4 rounded-md p-2">
          <span className="block font-bold text-center">Producto 5: Manual de Programación</span>
          <span className="block text-center">Un manual con todo lo que hay que saber sobre todos los lenguajes. Como el chip, pero este te lo tienes que leer</span>
          <img className="max-h-30" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fquestion_mark%2Fquestion_mark_PNG56.png&f=1&nofb=1&ipt=0de61cad27d795cddd73e5bc0f1c90c4c35a8848c2d504d026cdb94537e89303"></img>
          <span className="block text-center">Precio: 100000 €</span>
          <button className="max-w-50 rounded-md hover:scale-105 bg-linear-to-r from-red-800 to-red-900 p-2 m-2">Añadir al carrito</button>
        </div>
        <div className="grid place-items-center hover:scale-105 aspect-square object-cover bg-red-950 border-red-700 border-4 rounded-md p-2">
          <span className="block font-bold text-center">Producto 6: Sistema de IA para programar</span>
          <span className="block text-center">Como GitHub Copilot para VSCode, con la diferencia de que en vez de autocompletar este te lo hace todo</span>
          <img className="max-h-30" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fquestion_mark%2Fquestion_mark_PNG56.png&f=1&nofb=1&ipt=0de61cad27d795cddd73e5bc0f1c90c4c35a8848c2d504d026cdb94537e89303"></img>
          <span className="block text-center">Precio: 2147483647 €</span>
          <button className="max-w-50 rounded-md hover:scale-105 bg-linear-to-r from-red-800 to-red-900 p-2 m-2">Añadir al carrito</button>
        </div>
      </div>
    </div>

    <div className="p-10 grid bg-linear-to-r from-black to-red-950 text-white w-full">
      <h1 className="pt-10 block font-bold text-3xl text-center pb-5">Métricas verificadas por Científicos</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 sm:gap-4 p-2 place-items-center justify-around">
        <div className="grid sm:md:col-span-2">
          <span className="block font-bold text-center">⭐ Mejora de la calidad del código: ⭐</span>
          <span className="block text-center bg-linear-to-r from-red-900 to-red-100 bg-clip-text text-transparent">+999999%</span>
        </div>
        <div>
          <span className="block font-bold text-center">💵 Impacto financiero en los clientes: 💵</span>
          <span className="block text-center bg-linear-to-r from-red-200 to-red-800 bg-clip-text text-transparent">-117%</span>
        </div>
        <div>
          <span className="block font-bold text-center">📈 Porcentaje de recomendaciones: 📈</span>
          <span className="block text-center bg-linear-to-r from-red-700 to-red-300 bg-clip-text text-transparent">+500%</span>
        </div>
      </div>
    </div>

    <div className="pt-10 grid bg-linear-to-r from-black to-red-950 text-white w-full lg:mb-20 md:mb-45 sm:mb-45">
      <h1 className="block font-bold text-3xl text-center pb-5">Testimonios de Usuarios</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 sm:gap-4 p-2 place-items-center">
        <div>
          <span className="block font-bold text-center">Testimonio de Willyrex:</span>
          <img className="h-20 m-2 rounded-full shadow-lg mx-auto" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic-cdn.jtvnw.net%2Fjtv_user_pictures%2Fwillyrex-profile_image-9b7848e2994dd433-300x300.png&f=1&nofb=1&ipt=2658b87506a3fe0a94b4cb656f31fa0a0e38ccbd698823358e4775f7bd7da3d6"></img>
          <span className="block mx-auto text-center">Untar es un genio. Recomiendo sus servicios a todo el mundo.</span>
          <span className="block mx-auto text-center pb-5">★★★★★</span>
        </div>
        <div>
          <span className="block font-bold text-center">Testimonio de Vegetta777:</span>
          <img className="h-20 m-2 rounded-full shadow-lg mx-auto" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fyoutubepedia%2Fimages%2F9%2F94%2FVEGETTA777.jpg%2Frevision%2Flatest%3Fcb%3D20191029194124%26path-prefix%3Des&f=1&nofb=1&ipt=abccb90d07efbe8949382c501eca480f40a62b0c5fe4e95aa21be1be12ef60e1"></img>
          <span className="block mx-auto text-center">No sé qué sería de mi vida de no ser por Untar. Me ha cambiado la vida.</span>
          <span className="block mx-auto text-center pb-5">★★★★★</span>
        </div>
        <div>
          <span className="block font-bold text-center">Testimonio del Rubius:</span>
          <img className="h-20 m-2 rounded-full shadow-lg mx-auto" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic-cdn.jtvnw.net%2Fjtv_user_pictures%2F13b534e9-8c86-4e40-98d4-4c4aefa12edc-profile_image-300x300.png&f=1&nofb=1&ipt=3604b6b1563b2b298f381961ef0eaff42a73c24605be01d40dfc373dc041132d"></img>
          <span className="block mx-auto text-center">Untar es un progamador de talla mundial. No conozco a nadie mejor que él.</span>
          <span className="block mx-auto text-center pb-5">★★★★★</span>
        </div>
      </div>
    </div>


    <footer className="bg-linear-to-r from-red-900 to-red-800 text-white bottom-0 fixed w-full">
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 sm:gap-4 p-2 place-items-center">
        <span className="p-1">La empresa Untar la Manteca S. A. es con ánimo de lucro</span>
        <span className="p-1">Click aquí para ir a un sitio</span>
        <span className="p-1">Suscríbete a la newsletter por solo 0 € al mes</span>
      </div>
      <div className="grid col-span-full mx-auto p-2 w-fit">
        <span>Copyright Untar la Manteca 2025</span>
      </div>
    </footer>
    </>
  );
}
