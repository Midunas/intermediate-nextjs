'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '@nextui-org/button'

interface SubmitButtonProps {
  label: string
}

const SubmitButton = ({ label, ...props }: SubmitButtonProps) => {
  const { pending } = useFormStatus()
  return (
    <Button {...props} type="submit" isLoading={pending}>
      {label}
    </Button>
  )
}

export default SubmitButton
