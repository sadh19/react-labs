import { observer } from "mobx-react-lite"
import { AppStore } from "../../store/AppStore"

export const Results = observer(
  ({ counter }: { counter: AppStore }) => {
    return (<><div>
      <span>{counter.countTotal}</span>
    </div></>)
  }
)
