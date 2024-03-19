import Button from "../ecyce/buttons"

const PriceCards = ({ plans }) => {
    return (
        <>
            {plans.map((plan, idx) => (
                <div key={idx} className="col-span-1 flex flex-col justify-between bg-[#2a2a2a] rounded-3.5xl min-h-[500px] p-6">
                    <div>
                        <p className="text-2xl text-sf-lime font-medium">{plan.plan}</p>
                        <p className="text-[1.75rem] font-bold mt-1 text-balance leading-none">{plan.price_per_month}</p>
                        <p className="mt-5">{plan.description}</p>
                        <p className="font-semibold mt-5">WHAT&apos;S INCLUDED</p>
                        <ul className="mt-3">
                            {plan.features.map((feature, idx) => (
                                <li key={idx}><span className="text-sf-lime">✓{' '}</span>{feature}</li>
                            ))}
                        </ul>
                    </div>
                    <Button text={plan.button_text} type={"outline"} className="w-max justify-self-end text-sm" />
                </div>
            ))}
        </>
    )
}

export default PriceCards