import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  RadioField,
  Submit,
} from '@redwoodjs/forms'

import type { EditProgramKerjaExtractById, UpdateProgramKerjaExtractInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormProgramKerjaExtract = NonNullable<EditProgramKerjaExtractById['programKerjaExtract']>

interface ProgramKerjaExtractFormProps {
  programKerjaExtract?: EditProgramKerjaExtractById['programKerjaExtract']
  onSave: (data: UpdateProgramKerjaExtractInput, id?: FormProgramKerjaExtract['id']) => void
  error: RWGqlError
  loading: boolean
}

const ProgramKerjaExtractForm = (props: ProgramKerjaExtractFormProps) => {
  const onSubmit = (data: FormProgramKerjaExtract) => {
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.programKerjaExtract?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormProgramKerjaExtract> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="nameProker"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name proker
        </Label>
        
          <TextField
            name="nameProker"
            defaultValue={props.programKerjaExtract?.nameProker}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="nameProker" className="rw-field-error" />

        <Label
          name="persenProker"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Persen proker
        </Label>
        
          <TextField
            name="persenProker"
            defaultValue={props.programKerjaExtract?.persenProker}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ valueAsNumber: true, required: true }}
          />
        

        <FieldError name="persenProker" className="rw-field-error" />

        <Label
          name="programKerja"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Program kerja
        </Label>
        
          
          
        <div className="rw-check-radio-items">
          <RadioField
            id="programKerjaExtract-programKerja-0"
            name="programKerja"
            defaultValue="Keorganisasian"
            defaultChecked={props.programKerjaExtract?.programKerja?.includes('Keorganisasian')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Keorganisasian
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="programKerjaExtract-programKerja-1"
            name="programKerja"
            defaultValue="PublicAndRelation"
            defaultChecked={props.programKerjaExtract?.programKerja?.includes('PublicAndRelation')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Publicandrelation
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="programKerjaExtract-programKerja-2"
            name="programKerja"
            defaultValue="ToolsAndProperties"
            defaultChecked={props.programKerjaExtract?.programKerja?.includes('ToolsAndProperties')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Toolsandproperties
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="programKerjaExtract-programKerja-3"
            name="programKerja"
            defaultValue="Keilmuan"
            defaultChecked={props.programKerjaExtract?.programKerja?.includes('Keilmuan')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Keilmuan
          </div>
        </div>
          
        

        <FieldError name="programKerja" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ProgramKerjaExtractForm
