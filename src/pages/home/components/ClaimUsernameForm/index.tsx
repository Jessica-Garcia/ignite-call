import { ArrowRight } from 'phosphor-react'
import { Form } from './styles'
import { TextInput, Button } from '@ignite-ui/react'

export default function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput size="sm" prefix="ignite.com/" placeholder="seu-usuario" />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
