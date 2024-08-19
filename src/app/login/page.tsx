import BreadCrum from '@/components/BreadCrums/BreadCrum'
import Form from '@/components/Form/Form'
import DefaultLayout from '@/components/Layout/DefaultLayout'
import Section from '@/components/Section/Section'
import React from 'react'

const page = () => {
    return (
        <>
            <DefaultLayout>
                <div>
                        <BreadCrum />
                    <Section >
                        <Form />
                    </Section>
                </div>
            </DefaultLayout>
        </>
    )
}

export default page