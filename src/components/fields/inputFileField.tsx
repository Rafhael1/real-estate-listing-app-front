/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

// @ts-ignore
const adaptFileEventToValue = (delegate) => (e) => delegate(e.target.files[0])
const FileInput = ({
  input: {
    value: omitValue,
    onChange,
    onBlur,
    ...inputProps
  },
  meta: omitMeta,
  ...props
}) => (
  <input
    onChange={adaptFileEventToValue(onChange)}
    onBlur={adaptFileEventToValue(onBlur)}
    type="file"
    {...inputProps}
    {...props}
  />
)

export default FileInput
