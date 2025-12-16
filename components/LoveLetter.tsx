"use client";

interface LoveLetterProps {
    isUnlocked: boolean;
}

export function LoveLetter({ isUnlocked }: LoveLetterProps) {
    return (
        <div
            className={`
        relative max-w-3xl mx-auto p-8 sm:p-12 md:p-16
        glass-strong rounded-3xl
        transition-all duration-[2000ms] ease-out
        ${isUnlocked ? "content-unlocked" : "content-locked"}
      `}
        >
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/30 rounded-tl-xl" />
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/30 rounded-tr-xl" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/30 rounded-bl-xl" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/30 rounded-br-xl" />

            <div className="romantic-text text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-8 sm:mb-12 font-medium">
                    ¡Feliz cumpleaños, Conita!
                </h2>

                <div className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed text-left space-y-6">
                    <p>
                        Te quiero desear un feliz cumpleaños, estoy orgulloso de ti, por todo lo que has logrado, como puedes salir adelante a pesar de la adversidad, de los malos momentos y demás.
                    </p>

                    <p>
                        Me pone feliz haberte conocido, desde un principio notaba algo diferente en ti, eres especial y no escuches a nadie que te diga lo contrario, eres una maravilla de persona, cariñosa, atenta, linda, romántica, preocupada, perseverante, en fin, son muchos adjetivos que podría decir.
                    </p>

                    <p>
                        Te admiro mucho, sabes que cualquier cosa yo seré todo oído para escucharte, que te puedas desahogar, ser tu apoyo en los buenos y malos momentos, gracias por ayudarme cuando no me sentía bien, gracias por estar ahí conmigo, apoyándome y créeme, que si en algún momento no estés en mi vida, lo sentiré, créeme que eres muy importante para mí, gracias por ser tú.
                    </p>

                    <p>
                        No puedo estar más agradecido de poder conocer a una personita tan linda como tú, ya que hoy en día es difícil encontrar a personas así.
                    </p>

                    <p>
                        Yo sé que tienes potencial, tienes claras tus metas, lo cual es increíble, porque sé que las podrás cumplir, ya que eres capaz de eso y más, eres capaz de poder hacer todo lo que te propongas.
                    </p>

                    <p>
                        Me haces sentir como un niño pequeño cuando estoy contigo, me haces sentirme vivo, me haces sentirme feliz, querido, etc. Ojalá que con este tiempo que llevamos juntos, yo haya podido, al menos una vez, hecho sentirte querida :(((, que al verte sonreír, me hace recordar como eras cuando chiquita.
                    </p>

                    <p>
                        Quise salir de lo convencional para darte este regalito, ya que, siempre te decía que programaba pero no te quería decir qué era, bueno, esta es una de las cositas que hacía pero obviamente no te podía contar jejeje, espero que te haya gustado este detalle, que espero, haya sido de tu agrado y que al menos, pude haberte sacado una sonrisita, que es lo que más me gusta :c, me gusta tu sonrisa llena de emociones, que puedes demostrar tanto con esos ojitos especiales que tienes.
                    </p>

                    <p>
                        Esta página web quedará acá, no la borraré hasta que se borre automáticamente, por lo que, espero que dure para siempre, si no, bueno, tendré que hacer otra nueva jeje.
                    </p>

                    <p>
                        Fue un camino divertido hacer esta página, fue un trabajo arduo poder hacerla y que funcionara, pero valió la pena.
                    </p>

                    <p className="italic text-white/70">
                        Me emocioné un poco escribiendo esta cartita pipipipi, ya que me doy cuenta de todo lo que has provocado en mí desde que comenzamos a hablar :cc
                    </p>

                    <p className="mt-8 text-center">
                        Espero que te haya gustado Conita, con mucho amor y cariño.
                    </p>

                    <p className="text-center text-2xl sm:text-3xl font-medium mt-4">
                        Carlitos.
                    </p>
                </div>
            </div>
        </div>
    );
}
