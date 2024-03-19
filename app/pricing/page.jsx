import Image from "next/image";
import Container from "../components/ecyce/container";
import redMarker from "../../public/red-marker.svg";
import PriceCards from "../components/pricing-page/priceCards"

const plans = [{
    plan: 'Starter',
    price_per_month: '$ 1375/mo',
    description: 'For solopreneurs looking to multiply themselves.',
    features: ['18 hours of automation experts per month.',
        'Account Manager',
        'Developer(s)'],
    button_text: "I'm Ready"
},
{
    plan: 'Plus',
    price_per_month: '$ 1800/mo',
    description: 'For startups in need of an extra hand.',
    features: ['Everything in the Starter plan',
        '18 Extra hours of automation experts per month.',
        '36 hours total',
        'Technical Lead',
        'Project Manager',
        'Monthly Reporting'],
    button_text: 'Start Now!'
},
{
    plan: 'Premium',
    price_per_month: '$ 3200/mo',
    description: 'For startups in need of an extra hand.',
    features: ['Everything in the Plus plan',
        '42 Extra hours of automation experts per month.',
        '78 hours total',
        'Documentation',
        'Live Training'],
    button_text: 'Hands On!'
},
{
    plan: 'Custom',
    price_per_month: 'Create your own plan',
    description: 'Create your own plan!',
    'price_note': 'For faster deliveries and bigger projects.',
    features: ['Everything in the Premium plan',
        'As many extra hours as needed.'],
    button_text: 'Plan Now!'
}]

const PricingPage = () => {
    return (
        <main className="w-full min-h-screen bg-sf-black text-sf-cream flex flex-col justify-start items-center">
            <Container className={"w-full px-20 2x:py-32 py-16"}>
                <div className="grid place-content-center text-center">
                    <h1 className="bold-neue text-heading">Find the right plan for your necessities</h1>
                    <div className="relative grid place-content-center text-center">
                        <h2 className="z-20 text-2xl w-max">Introduce a whole new automation team to your organization.</h2>
                        <div className="z-10 absolute inset-0 flex justify-center items-center">
                            <Image src={redMarker} alt="red marker" className="ml-6" />
                        </div>
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-4 gap-5">
                    <PriceCards plans={plans}/>
                </div>
            </Container>
        </main>
    );
}

export default PricingPage;
