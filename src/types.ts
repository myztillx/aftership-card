import {
  LovelaceCard,
  LovelaceCardConfig,
  LovelaceCardEditor,
} from 'custom-card-helpers'

declare global {
  interface HTMLElementTagNameMap {
    'aftership-card-editor': LovelaceCardEditor
    'hui-error-card': LovelaceCard
  }
}

export interface AftershipCardConfig extends LovelaceCardConfig {
  type: string
  entity: string
  name?: string
  show_add?: boolean
}

export interface Tracking {
  name: string
  tracking_number: string
  slug: string
  link: string
  last_update: string
  expected_delivery: string
  status: string
  last_checkpoint: Checkpoint
}

export interface Checkpoint {
  created_at: string
  slug: string
  checkpoint_time: string
  location: string
  city: string
  state: string
  country_iso3: string
  country_name: string
  message: string
  tag: string
  subtag: string
  subtag_message: string
  zip: string
}

export interface ItemEventProperty extends EventTarget {
  item: Tracking
}
