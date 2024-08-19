import Form from '@/components/Form/Form'
import DefaultLayout from '@/components/Layout/DefaultLayout'
import Section from '@/components/Section/Section'
import React from 'react'

const page = () => {
    return (
        <>
            <DefaultLayout>
                <Section title='' >
                <Form />
                </Section>
            </DefaultLayout>
        </>
    )
}

export default page