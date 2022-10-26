import {Meta, StoryObj} from '@storybook/react'
import { Text, textProps } from './Text'

export default {
    title: 'components/Text',
    component: Text,
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
} as Meta<textProps>



export const Default: StoryObj<textProps> = {
    argTypes: {
        asChild: {
          table: {
                disable: true,
            }
        }
    }
}


export const Small: StoryObj<textProps> = {
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

export const Large: StoryObj<textProps> = {
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

export const CustomComponent: StoryObj<textProps> = {
    args: {
        asChild: true,
        children: (
            <p>Text with P tag</p>
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