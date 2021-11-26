import React from "react"
import Input from "../../../micro/Forms/Input/Input"
import Button from "../../../micro/Button/Button"
import FormDefault from "../FormDefault/FormDefault"

function NewPasswordForm(props) {

    return (
        <>
            <main class="container-fluid custom-container py-2 pb-5">

                <FormDefault title="Redefinir Senha" action="" class="custom-form-box mx-3 mx-sm-1 mx-lg-4 px-5 px-sm-1 px-lg-4">

                    <div className="container custom-form-div py-2">

                        <div className="row custom-form d-flex justify-content-center">
                            <div className="col-10 col-sm-8 col-md-7 col-lg-5">
                                <Input label="Senha" className="form-input form-control col-12 form-label" type="password" id="password" placeholder="Digite sua nova senha..." />
                            </div>
                        </div>

                        <div className="row custom-form d-flex justify-content-center">
                            <div className="col-10 col-sm-8 col-md-7 col-lg-5">
                                <Input label="Senha" type="password" className="form-label form-control form-input col-12 " id="senha" placeholder="Confirme sua nova senha..." />
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <Button label="Redefinir"  navigation="" class="btn-confirmacao" type="submit" />

                        </div>
                    </div>

                </FormDefault>

            </main>

        </>
    )
}

export default NewPasswordForm


