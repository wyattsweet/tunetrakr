import React from 'react'

import preload from '../../preload.json'
import TuneList from '../TuneList'
import VerticalColumn from '../VerticalColumn'
import Log from '../Log'
import styles from './styles.css'

const ListWrapper = () => {
  return (
    <div className={styles.listWrapper}>
      <VerticalColumn>
        <TuneList title="Active Tunes" tunes={preload} />
      </VerticalColumn>
      <VerticalColumn>
        <TuneList title="Backlog" tunes={preload} />
      </VerticalColumn>
      <VerticalColumn>
        <Log />
      </VerticalColumn>
    </div>
  )
}

export default ListWrapper
