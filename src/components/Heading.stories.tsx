import {Meta, StoryObj} from '@storybook/react'
import {Heading, HeadingProps } from './Heading'

export default {
    title: 'components/Heading',
    component: Heading,
    args:{
        children: 'Lorem ipsum.',
        size: 'md',
        
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: { 
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>



export const Default: StoryObj<HeadingProps> = {
    //Para Habilitar a funcionalidade do Button retire o argtypes //
    argTypes: {
        asChild: {
          table: {
                disable: true,
            }
        }
    }
}


export const Small: StoryObj<HeadingProps> = {
    args: {
        size:'sm'
    },
    //Para Habilitar a funcionalidade do Button retire o argtypes //
    argTypes: {
        asChild: {
          table: {
                disable: true,
            }
        }
    }
}

export const Large: StoryObj<HeadingProps> = {
    args:{
        size:'lg'
    },
    //Para Habilitar a funcionalidade do Button retire o argtypes //
    argTypes: {
        asChild: {
          table: {
                disable: true,
            }
        }
    }
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args:{
        asChild: true,
        children: (
            <h1>Heading with H1</h1>
        )
    },
    //Para Habilitar a funcionalidade do Button retire o argtypes //
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
          table: {
                disable: true,
            }
        }
    }
}