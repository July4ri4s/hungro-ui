const AboutHero = () => 
{
    return  (
        <section className="bg-white mt-24">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-[#406036]">
           Acerca de nosotros
          </h1>
          <p className="mb-8 text-2xl font-normal text-gray-500 lg:text-x1 sm:px-16 xl:px-48 dark:text-gray-400">
          Esta es una herramienta de donaciones. Donde podrás donar a organizaciones como las
Obras del Espíritu Santo, ayudando a personas en situaciones de riesgo.

          </p>
        
        </div>

        <section class="bg-white dark:bg-white-900">
    <div class="gap-8 items-center py-8 px-4 mx-autopx-4 max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img class="w-full dark:hidden" src="https://img.freepik.com/vector-gratis/ilustracion-concepto-lider_114360-7659.jpg?w=2000" alt="dashboard image" />
        <img class="w-full hidden dark:block" src="https://img.freepik.com/vector-gratis/ilustracion-concepto-lider_114360-7659.jpg?w=2000" alt="dashboard image" />
        <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-[#406036]">Nuestra misión</h2>
            <p class="mmb-8 text-2xl font-normal text-gray-500 md:text-xl dark:text-gray-400">Ayudar a personas de bajos recursos a adquirir alimentos según sus necesidades por medio de donaciones, las cuales ayudan a reducir el desperdicio de alimentos.</p>
            
        </div>
    </div>
</section>


<section class="rounded-lg bg-white dark:bg-[#406036] w:70%">
    <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 ">
    <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Nuestra visión</h2>
            <p class="mmb-8 text-2xl font-normal text-gray-500 md:text-xl dark:text-gray-400">Minimizar la hambruna del país, evitar el desperdicio de alimentos, ayudar a la organización y distribución de alimentos</p>
            
        </div>
      
          <img class="w-full dark:hidden rounded-xl" src="https://img.freepik.com/vector-gratis/ilustracion-concepto-mision-empresarial_114360-7315.jpg?w=2000" alt="dashboard image" />
        <img class="w-full hidden dark:block rounded-xl" src="https://img.freepik.com/vector-gratis/ilustracion-concepto-mision-empresarial_114360-7315.jpg?w=2000" alt="dashboard image" />
      
        
    </div>
</section>


<div class="py-20 bg-white-50">
    <div class="container mx-auto px-6 md:px-12 xl:px-32">
        <div class="mb-16 text-center">
            <h2 class="mb-4 text-center text-4xl text-gray-900 font-extrabold md:text-[#406036]">¿Quiénes somos?</h2>
            <p class="mmmb-8 text-2xl font-normal text-gray-500 lg:w-8/12 lg:mx-auto dark:text-gray-400">Somos un grupo de jóvenes que desean facilitar el proceso de ayudar a las demás
personas, por medio de esta herramienta que permite donar más fácilmente y que además
distribuye los alimentos según las necesidades de los donatarios.</p>
        </div>
        <div class="grid gap-12 items-center md:grid-cols-3">
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg" alt="woman" loading="lazy" width="640" height="805" />
                <div>
                    <h4 class="text-2xl">Juliana Arias López</h4>
                    <span class="block text-sm text-gray-500">Estudiante</span>
                </div>
            </div>
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80" 
                    src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg" alt="man" loading="lazy" width="1000" height="667" />
                <div>
                    <h4 class="text-2xl">Brandon Valverde Quirós</h4>
                    <span class="block text-sm text-gray-500">Estudiante</span>
                </div>
            </div>
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="https://tailus.io/sources/blocks/classic/preview/images/woman.jpg" alt="woman" loading="lazy" width="1000" height="667" />
                <div>
                    <h4 class="text-2xl">Angélica Marín Vargas</h4>
                    <span class="block text-sm text-gray-500">Estudiante</span>
                </div>
            </div>
        </div>
    </div>
</div>






      </section>

       




    )
}


export default AboutHero