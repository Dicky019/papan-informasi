import { useState } from 'react'

import { PickerInline } from 'filestack-react'
import type { EditInfentarisById, UpdateInfentarisInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

type FormInfentaris = NonNullable<EditInfentarisById['infentaris']>

interface InfentarisFormProps {
  infentaris?: EditInfentarisById['infentaris']
  onSave: (data: UpdateInfentarisInput, id?: FormInfentaris['id']) => void
  error: RWGqlError
  loading: boolean
}

const InfentarisForm = (props: InfentarisFormProps) => {
  const [url, setUrl] = useState(props?.infentaris?.image_url)

  const onSubmit = (data: FormInfentaris) => {
    const dataWithUrl = Object.assign(data, { image_url: url })
    props.onSave(dataWithUrl, props?.infentaris?.id)
  }

  const onFileUpload = (response) => {
    console.info(response)
    setUrl(response.filesUploaded[0].url)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormInfentaris> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.infentaris?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="image_url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image url
        </Label>

        {/*   <TextField
          name="image_url"
          defaultValue={props.infentaris?.image_url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        /> */}

        <PickerInline
          apikey={'AhzFHaU2SoWPqGGX5OT4gz'}
          onSuccess={onFileUpload}
        >
          <div
            style={{ display: url ? 'none' : 'block', height: '500px' }}
          ></div>
        </PickerInline>

        {url && (
          <div>
            <img
              className="my-8 block w-96 rounded-md object-cover"
              src={url}
              alt="avatar"
              // style={{ display: 'block', margin: '2rem 0', height: '300px' }}
            />
            <button
              onClick={() => setUrl(null)}
              className="rw-button rw-button-blue"
            >
              Replace Image
            </button>
          </div>
        )}

        <FieldError name="image_url" className="rw-field-error" />

        <Label
          name="value"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Value
        </Label>

        <NumberField
          name="value"
          defaultValue={props.infentaris?.value}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="value" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default InfentarisForm
