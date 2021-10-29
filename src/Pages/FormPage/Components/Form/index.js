import DisplayData from "../DisplayData";

const Form = ({
                formData,
                onFormChange,
                onSubmit,
                dataToDisplay
}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          <p>Email</p>
          <input value={formData.email} onChange={onFormChange} name='email' type={'email'}/>
        </label>
        <label>
          <p>Password</p>
          <input value={formData.password} onChange={onFormChange} name='password' type={'password'}/>
        </label>
        <div>
          <button type={'submit'}>Print Form</button>
        </div>
      </form>
      <DisplayData data={dataToDisplay}/>
    </div>

  );
};

export default Form;
