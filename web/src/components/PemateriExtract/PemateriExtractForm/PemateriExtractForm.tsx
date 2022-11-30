import { useState } from 'react'

import { PickerInline } from 'filestack-react'
import type {
  EditPemateriExtractById,
  UpdatePemateriExtractInput,
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

type FormPemateriExtract = NonNullable<
  EditPemateriExtractById['pemateriExtract']
>

interface PemateriExtractFormProps {
  pemateriExtract?: EditPemateriExtractById['pemateriExtract']
  onSave: (
    data: UpdatePemateriExtractInput,
    id?: FormPemateriExtract['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const PemateriExtractForm = (props: PemateriExtractFormProps) => {
  // const onSubmit = (data: FormPemateriExtract) => {
  //   props.onSave(data, props?.pemateriExtract?.id)
  // }

  const [url, setUrl] = useState(props?.pemateriExtract?.image_url)

  const onSubmit = (data: FormPemateriExtract) => {
    const dataWithUrl = Object.assign(data, { image_url: url })
    props.onSave(dataWithUrl, props?.pemateriExtract?.id)
  }

  const onFileUpload = (response) => {
    console.info(response)
    setUrl(response.filesUploaded[0].url)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormPemateriExtract> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.pemateriExtract?.name}
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
          defaultValue={props.pemateriExtract?.nra}
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

        {/* <TextField
          name="image_url"
          defaultValue={props.pemateriExtract?.image_url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="image_url" className="rw-field-error" /> */}

        <Label
          name="hari"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Hari
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="pemateriExtract-hari-0"
            name="hari"
            defaultValue="Senin"
            defaultChecked={props.pemateriExtract?.hari?.includes('Senin')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Senin</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="pemateriExtract-hari-1"
            name="hari"
            defaultValue="Selasa"
            defaultChecked={props.pemateriExtract?.hari?.includes('Selasa')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Selasa</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="pemateriExtract-hari-2"
            name="hari"
            defaultValue="Rabu"
            defaultChecked={props.pemateriExtract?.hari?.includes('Rabu')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Rabu</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="pemateriExtract-hari-3"
            name="hari"
            defaultValue="Kamis"
            defaultChecked={props.pemateriExtract?.hari?.includes('Kamis')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Kamis</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="pemateriExtract-hari-4"
            name="hari"
            defaultValue="Jumat"
            defaultChecked={props.pemateriExtract?.hari?.includes('Jumat')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Jumat</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="pemateriExtract-hari-5"
            name="hari"
            defaultValue="Sabtu"
            defaultChecked={props.pemateriExtract?.hari?.includes('Sabtu')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Sabtu</div>
        </div>

        <FieldError name="hari" className="rw-field-error" />

        <Label
          name="konsentrasi"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Konsentrasi
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="pemateriExtract-konsentrasi-0"
            name="konsentrasi"
            defaultValue="Program"
            defaultChecked={props.pemateriExtract?.konsentrasi?.includes(
              'Program'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Program</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="pemateriExtract-konsentrasi-1"
            name="konsentrasi"
            defaultValue="Jaringan"
            defaultChecked={props.pemateriExtract?.konsentrasi?.includes(
              'Jaringan'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Jaringan</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="pemateriExtract-konsentrasi-2"
            name="konsentrasi"
            defaultValue="Hardware"
            defaultChecked={props.pemateriExtract?.konsentrasi?.includes(
              'Hardware'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Hardware</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="pemateriExtract-konsentrasi-3"
            name="konsentrasi"
            defaultValue="MultiMedia"
            defaultChecked={props.pemateriExtract?.konsentrasi?.includes(
              'MultiMedia'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Multimedia</div>
        </div>

        <FieldError name="konsentrasi" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PemateriExtractForm
