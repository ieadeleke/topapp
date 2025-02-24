import { Modal } from "antd";

interface BillPaymentInterface {
    openBillModal: boolean
    closeBillModal: () => void
}

const BillPayment = (props: BillPaymentInterface) => {
    return (
        <Modal open={props.openBillModal} onCancel={props.closeBillModal} footer={null}>
            <div>

            </div>
        </Modal>
    )
}

export default BillPayment;