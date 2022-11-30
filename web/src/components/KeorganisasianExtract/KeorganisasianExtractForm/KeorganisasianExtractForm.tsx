import { useState } from 'react'

import { PickerInline } from 'filestack-react'
import type {
  EditKeorganisasianExtractById,
  UpdateKeorganisasianExtractInput,
} from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  RadioField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

type FormKeorganisasianExtract = NonNullable<
  EditKeorganisasianExtractById['keorganisasianExtract']
>

interface KeorganisasianExtractFormProps {
  keorganisasianExtract?: EditKeorganisasianExtractById['keorganisasianExtract']
  onSave: (
    data: UpdateKeorganisasianExtractInput,
    id?: FormKeorganisasianExtract['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const KeorganisasianExtractForm = (props: KeorganisasianExtractFormProps) => {
  // const onSubmit = (data: FormKeorganisasianExtract) => {
  //   props.onSave(data, props?.keorganisasianExtract?.id)
  // }

  const [url, setUrl] = useState(props?.keorganisasianExtract?.image_url)

  const onSubmit = (data: FormKeorganisasianExtract) => {
    const dataWithUrl = Object.assign(data, { image_url: url })
    props.onSave(dataWithUrl, props?.keorganisasianExtract?.id)
  }

  const onFileUpload = (response) => {
    console.info(response)
    setUrl(response.filesUploaded[0].url)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormKeorganisasianExtract> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.keorganisasianExtract?.name}
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
          defaultValue={props.keorganisasianExtract?.nra}
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

        {/* <TextField
          name="image_url"
          defaultValue={props.keorganisasianExtract?.image_url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="image_url" className="rw-field-error" /> */}

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

        <Label
          name="hari"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Hari
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="keorganisasianExtract-hari-0"
            name="hari"
            defaultValue="Senin"
            defaultChecked={props.keorganisasianExtract?.hari?.includes(
              'Senin'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Senin</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="keorganisasianExtract-hari-1"
            name="hari"
            defaultValue="Selasa"
            defaultChecked={props.keorganisasianExtract?.hari?.includes(
              'Selasa'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Selasa</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="keorganisasianExtract-hari-2"
            name="hari"
            defaultValue="Rabu"
            defaultChecked={props.keorganisasianExtract?.hari?.includes('Rabu')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Rabu</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="keorganisasianExtract-hari-3"
            name="hari"
            defaultValue="Kamis"
            defaultChecked={props.keorganisasianExtract?.hari?.includes(
              'Kamis'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Kamis</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="keorganisasianExtract-hari-4"
            name="hari"
            defaultValue="Jumat"
            defaultChecked={props.keorganisasianExtract?.hari?.includes(
              'Jumat'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Jumat</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="keorganisasianExtract-hari-5"
            name="hari"
            defaultValue="Sabtu"
            defaultChecked={props.keorganisasianExtract?.hari?.includes(
              'Sabtu'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Sabtu</div>
        </div>

        <FieldError name="hari" className="rw-field-error" />

        <Label
          name="jenisKegiatan"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Jenis kegiatan
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="keorganisasianExtract-jenisKegiatan-0"
            name="jenisKegiatan"
            defaultValue="Pembelajaran"
            defaultChecked={props.keorganisasianExtract?.jenisKegiatan?.includes(
              'Pembelajaran'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Pembelajaran</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="keorganisasianExtract-jenisKegiatan-1"
            name="jenisKegiatan"
            defaultValue="Nginap"
            defaultChecked={props.keorganisasianExtract?.jenisKegiatan?.includes(
              'Nginap'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Nginap</div>
        </div>

        <FieldError name="jenisKegiatan" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default KeorganisasianExtractForm
