import clsx from 'clsx'
import React, { useState } from 'react'
import { Element } from 'react-scroll'
import { features, plans } from '../components/constants'
import CountUp from 'react-countup'
import Button from '../components/Button'

function Pricing() {

    const [monthly, setMonthly] = useState(false)

    return (
        <section>
            <Element name='pricing'>
                <div className='container'>
                    <div className='max-w-960  relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16'>
                        <h3 className='h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm'>
                            Flexible pricing for teams of all sizes
                        </h3>


                        {/* button */}
                        <div
                            className='relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop:blur-[6px] max-md:w-[310px]'
                        >

                            <button
                                className={clsx(
                                    'pricing-head_btn', monthly && 'text-p4'
                                )}
                                onClick={() => setMonthly(true)}
                            >
                                Monthly
                            </button>

                            <button
                                className={clsx(
                                    'pricing-head_btn', !monthly && 'text-p4'
                                )}
                                onClick={() => setMonthly(false)}
                            >
                                Annual
                            </button>

                            <div
                                className={clsx(
                                    'g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500',
                                    !monthly && 'translate-x-full'
                                )}
                            />

                        </div>

                        {/* backgound images */}
                        <div
                            className='pricing-bg'>
                            <img
                                src='/images/bg-outlines.svg'
                                width={960}
                                height={380}
                                alt='outline'
                                className='relative z-2'
                            />
                            <img
                                src='/images/bg-outlines-fill.png'
                                width={960}
                                height={380}
                                alt='inline'
                                className='absolute inset-0 opacity-5 mix-blond-soft-light'
                            />
                        </div>
                    </div>

                    {/* pricing section */}

                    <div
                        className='scroll-hidden relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6'
                    >
                        {plans.map((plan, index) => (
                            <div
                                key={plan.id}
                                className='pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)] '
                            >
                                {index === 1 && (<div className='g4 absolute h-330 left-0 right-0 top-0 z-1 rounded-tl-3xl rounded-tr-3xl' />)}

                                <div
                                    className={clsx(
                                        'absolute left-0 right-0 z-2 flex items-center justify-center',
                                        index === 1 ? '-top-6' : '-top-6 xl-top-11'
                                    )}>
                                    <img
                                        src={plan.logo}
                                        alt={plan.title}
                                        className={clsx(
                                            'object-contain drop-shadow-2xl',
                                            index === 1 ? 'size-[120px]' : 'size-[88px]'
                                        )}
                                    />
                                </div>

                                <div
                                    className={clsx(
                                        'relative flex flex-col items-center ',
                                        index === 1 ? 'pt-24' : 'pt-12'
                                    )}
                                >
                                    <div
                                        className={clsx(
                                            'small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase',
                                            index === 1 ? 'border-p3 text-p3' : 'border-p1 text-p1'
                                        )}
                                    >
                                        {plan.title}
                                    </div>

                                    <div
                                        className='relative z-2 flex items-center justify-center'
                                    >
                                        <div
                                            className={clsx(
                                                'h-num flex items-start',
                                                index === 1 ? 'text-p3' : 'text-p4'
                                            )}
                                        > $ <CountUp
                                                start={plan.priceMonthly}
                                                end={monthly ? plan.priceMonthly : plan.priceYearly}
                                                duration={0.4}
                                                useEasing={false}
                                                preserveValue
                                            />
                                        </div>

                                        <div className='small-1 relative top-3 ml-1 uppercase '>
                                            / month
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={clsx(
                                        'body-1 relative z-2 mb-10 w-full border-b-s2 pb-9 text-center text-p4',
                                        index === 1 && 'border-b'
                                    )}
                                >
                                    {plan.caption}
                                </div>

                                <ul className='mx-auto space-y-4 xl:px-7'>
                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className='relative flex items-center gap-5'>
                                            <img
                                                src={'/images/check.png'}
                                                alt='check'
                                                className='size-10 object-contain'
                                            />
                                            <p className='flex-1'>
                                                {feature}
                                            </p>
                                        </li>
                                    ))}
                                </ul>

                                <div className='mt-10 flex w-full justify-center'>
                                    <Button icon={plan.icon}>Get Started</Button>
                                </div>

                                {index === 1 && (
                                    <p
                                        className="small-compact mt-9 text-center text-p3 before:mx-2.5 before:content-['-'] after:mx-2.5 after:content-['-']"
                                    >
                                        Limited time offer
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </Element>
        </section>
    )
}

export default Pricing


// what is the use of Index ?

// The index in this code is used to determine the position of a plan in the plans array and apply conditional styles and logic accordingly. It is provided as the second argument in the .map() function when iterating over plans:

// jsx
// {plans.map((plan, index) => (


// How index is used:
// Styling the Middle Plan Differently

// The index === 1 check is used to apply unique styles to the second plan (assuming plans has three elements and follows a standard pricing table format where the middle plan is highlighted).

// Example:
// jsx
// {index === 1 && (<div className='g4 absolute h-330 left-0 right-0 top-0 z-1 rounded-tl-3xl rounded-tr-3xl' />)}


// This adds a background highlight for the second plan.


// what is the use of item ?

// In the provided code, item is a variable that represents each individual object in the faq array when iterating over it using the .map() function. The faq array is imported from ../components/constants, and it likely contains a list of frequently asked questions (FAQs) and their corresponding answers or details.

// Explanation of item in the Code
// faq Array:

// The faq array is assumed to be an array of objects, where each object represents a single FAQ item. Each object likely contains properties such as id, question, answer, or other relevant details.

// Example structure of faq:

// javascript
// Copy
// const faq = [
//     { id: 1, question: "What is XORA AI?", answer: "XORA AI is a powerful video editing tool..." },
//     { id: 2, question: "How do I use XORA AI?", answer: "You can use XORA AI by..." },
//     // More FAQ items...
// ]

// .map() Function:

// The .map() function is used to iterate over the faq array and render a list of FaqItem components.
// For each object in the faq array, the .map() function passes the object (referred to as item) to the FaqItem component as a prop.

// Why item is Used:

// The item variable is used to dynamically render the content of each FAQ item. Instead of hardcoding each question and answer, the code iterates over the faq array and uses the item to populate the FaqItem component.

// This makes the code more maintainable and scalable, as adding or removing FAQ items only requires updating the faq array, not the component itself