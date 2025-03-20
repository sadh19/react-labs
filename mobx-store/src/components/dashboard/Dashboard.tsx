import { observer } from "mobx-react-lite"
import { AppStore } from "../../store/AppStore"

export const Dashboard = observer(
  ({ counter }: { counter: AppStore }) => {
    return (<><div>
      <button onClick={() => counter.increaseCount()}>Increase</button>
      <button onClick={() => counter.decreaseCount()}>Decrease</button>
    </div></>)
  }
)
