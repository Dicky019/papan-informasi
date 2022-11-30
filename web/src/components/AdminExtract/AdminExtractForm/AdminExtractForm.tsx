import { useState } from 'react'

import { PickerInline } from 'filestack-react'
import type {
  EditAdminExtractById,
  UpdateAdminExtractInput,
} from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

type FormAdminExtract = NonNullable<EditAdminExtractById['adminExtract']>

interface AdminExtractFormProps {
  adminExtract?: EditAdminExtractById['adminExtract']
  onSave: (data: UpdateAdminExtractInput, id?: FormAdminExtract['id']) => void
  error: RWGqlError
  loading: boolean
}

const AdminExtractForm = (props: AdminExtractFormProps) => {
  const [url, setUrl] = useState(props?.adminExtract?.image_url)

  const onSubmit = (data: FormAdminExtract) => {
    const dataWithUrl = Object.assign(data, { image_url: url })
    props.onSave(dataWithUrl, props?.adminExtract?.id)
  }

  const onFileUpload = (response) => {
    console.info(response)
    setUrl(response.filesUploaded[0].url)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormAdminExtract> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.adminExtract?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="nra"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          NRA
        </Label>

        <TextField
          name="nra"
          defaultValue={props.adminExtract?.nra}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="nra" className="rw-field-error" />

        <Label
          name="image_url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image url
        </Label>

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

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default AdminExtractForm
